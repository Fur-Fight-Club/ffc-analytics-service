import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
  UnauthorizedException,
  Inject,
  Request,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { JWTServicePayload } from "./auth.model";
import * as fs from "fs";
import { ConfigService } from "@nestjs/config";
import { ApiBearerAuth, ApiHeader } from "@nestjs/swagger";
import { UsersDocument } from "src/firestore/documents/users";
import { CollectionReference } from "@google-cloud/firestore";
import { ApplicationDocument } from "src/firestore/documents/applications";

@Injectable()
export class FirebaseGuard implements CanActivate {
  constructor(
    configService: ConfigService,
    @Inject(UsersDocument.collectionName)
    private usersCollection: CollectionReference<UsersDocument>,
    @Inject(ApplicationDocument.collectionName)
    private applicationsCollection: CollectionReference<ApplicationDocument>
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const [clientId, clientSecret, appId] = this.extractServiceToken(request);
    if (!clientId || !clientSecret) {
      throw new UnauthorizedException(
        `The following properties are missing: ${
          !clientId ? "x-client-id" : ""
        } ${!clientSecret ? "x-client-secret" : ""}`
      );
    }

    const snapshot = await this.usersCollection.get();
    const users = snapshot.docs.map((doc) => doc.data());
    const user = users.find(
      (user) => user.clientId === clientId && user.clientSecret === clientSecret
    );
    if (!user) {
      throw new UnauthorizedException(
        `User with clientId "${clientId}" and clientSecret "${clientSecret}" not found`
      );
    }

    if (appId) {
      const snapshot = await this.applicationsCollection.get();
      const applications = snapshot.docs.map((doc) => doc.data());
      const application = applications.find(
        (application) => application.applicationId === appId
      );
      if (!application) {
        throw new NotFoundException(
          `Application with appId "${appId}" not found`
        );
      }
    }

    request["auth"] = {
      clientId,
      clientSecret,
      appId,
    };

    return true;
  }

  private extractServiceToken(request: Request): string[] | undefined {
    const clientId = request.headers["x-client-id"] as string | undefined;
    const clientSecret = request.headers["x-client-secret"] as
      | string
      | undefined;
    const appId = request.headers["x-app-id"] as string | undefined;
    return [clientId, clientSecret, appId];
  }
}

export interface AuthRequest extends Request {
  auth: {
    clientId: string;
    clientSecret: string;
    appId?: string;
  };
}

import {
  CanActivate,
  Injectable,
  UnauthorizedException,
  ExecutionContext,
} from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context
      .switchToHttp()
      .getRequest<Request & { headers: any }>();

    const apiKey = request.headers['x-api-key'];

    if (!apiKey || apiKey !== 'mnus_smos123') {
      throw new UnauthorizedException('Invalid API key');
    }

    return true;
  }
}

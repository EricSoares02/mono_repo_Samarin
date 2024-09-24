import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { Request, Response } from "express";
import { InsufficientAgeException } from "src/domain/exceptions/insufficient-age.exception";
import { InvalidEmailException } from "src/domain/exceptions/invalid-email.exception";
import { InvalidTagException } from "src/domain/exceptions/invalid-tag.exception";

@Catch(Error)
export class DomainExceptionFilter implements ExceptionFilter{


    // Mapeamento de exceções para mensagens e códigos de status
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    private readonly exceptionMap = new Map<Function, { status: HttpStatus, message: string }>([
      [InsufficientAgeException, { status: HttpStatus.BAD_REQUEST, message: 'The User must be of legal age.' }],
      [InvalidTagException, { status: HttpStatus.BAD_REQUEST, message: 'This Tag is invalid.' }],
      [InvalidEmailException, { status: HttpStatus.BAD_REQUEST, message: 'This Email is invalid.' }]
      // Adicione outras exceções de domínio conforme necessário
    ]);


    catch(exception: Error, host: ArgumentsHost) {
       

        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        
       // Recupera o status e a mensagem da exceção mapeada, ou usa valores padrão
        const exceptionDetails = this.exceptionMap.get(exception.constructor) || {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'An unexpected error occurred.',
        };

        response.status(exceptionDetails.status).json({
            path: request.url,
            errorMessage: exceptionDetails.message,
          });
        
    }
} 
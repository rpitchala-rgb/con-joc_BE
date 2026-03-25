import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const setupSwagger = (app: INestApplication):void => {
    const config = new DocumentBuilder()
        .setTitle("Convoso")
        .setDescription("Convoso-joc")
        .setVersion("1.0")
        .addApiKey({ type: "apiKey", name: "token", in: "header" }, "token")
        .addApiKey({ type: "apiKey", name: "email", in:"header"},"email")
        .addSecurityRequirements("token")
        .addSecurityRequirements("email")
        .build()

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('apis',app,document);
}
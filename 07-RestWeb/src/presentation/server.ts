import express, { Router } from 'express';
import compression from 'compression';
import path from 'path';

interface Options {
  port: number;
  routes: Router;
  public_path?: string;
}

export class Server {
  private app = express();
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, routes, public_path = 'public' } = options;
    this.port = port;
    this.publicPath = public_path;
    this.routes = routes;
  }

  async start() {
    //* Middlewares
    this.app.use(express.json()); // raw
    this.app.use(express.urlencoded({ extended: true })); // x-www-form-encoded
    this.app.use(compression()); // comprimir respuestas para velocidad

    //* Public Folder
    this.app.use(express.static(this.publicPath)); // servir contenido estático

    //* Routes
    this.app.use(this.routes); // usar router fuera del archivo

    //* SPA
    // servir SPA en la carpeta public en cualquier ruta no definida
    this.app.get('/*any', (req, res) => {
      const indexPath = path.join(
        __dirname + `../../../${this.publicPath}/index.html`,
      );
      res.sendFile(indexPath);
    });

    // escucha en el puerto indicado
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

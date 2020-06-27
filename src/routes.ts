import { UsersController } from "./app/controllers/UsersController";
import { MovieController } from "./app/controllers/MovieController";
import { SessionController } from "./app/controllers/SessionController";

import authMiddleware from './app/middlewares/auth';

export class Routes {
  public UsersController: UsersController = new UsersController();
  public MovieController: MovieController = new MovieController();
  public SessionController: SessionController = new SessionController();

  public routes(app): void {
    app
      .route("/users")
      .get(this.UsersController.index)
      .post(this.UsersController.store);

    app.use(authMiddleware);
    
    app
      .route("/users/:_id")
      .get(this.UsersController.show)
      .put(this.UsersController.update)
      .delete(this.UsersController.destroy);


    app
      .route("/movies")
      .get(this.MovieController.index)
      .post(this.MovieController.store);

    app
      .route("/movies/:_id")
      .get(this.MovieController.show)
      .put(this.MovieController.update)
      .delete(this.MovieController.destroy);

      app
      .route("/session")
      .post(this.SessionController.store)
  }
}

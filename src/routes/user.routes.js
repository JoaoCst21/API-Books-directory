import app from "../framework/framework.js";
import controller from "../controller/user.controller.js";

const router = app.createRouter();

router.use((req, res) => {
  console.log("subRoute Middleware");
});

router.route("/").get(controller.getAll).post(controller.create);

router
  .route("/:id")
  .get(controller.get)
  .put(controller.update)
  .delete(controller.delete);

export default router;

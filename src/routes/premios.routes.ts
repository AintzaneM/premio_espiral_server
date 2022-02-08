import {Router} from "express"
const router = Router();

import {getPremios} from "./premios.controller"
import {getPremio} from "./premios.controller"
import {createPremio} from "./premios.controller"
import {deletePremio} from "./premios.controller"
import {updatePremio} from "./premios.controller"

/*CREATE PREMIO*/ 

router.post("/premios", createPremio )


/*READ PREMIO*/ 

router.get("/premios", getPremios )

router.get("/premios/:id", getPremio )


/*UPLOAD PREMIO*/ 

router.put("/premios/:id", updatePremio )


/*DELETE PREMIO*/ 

router.delete("/premios/:id", deletePremio )

export default router


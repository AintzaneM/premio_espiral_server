import {Router} from "express"
const router = Router();

import {getUsers} from "./user.controller"
import {login} from "./user.controller"
import {home} from "./user.controller"
import {logout} from "./user.controller"

/*READ PREMIO*/ 

router.get("/users", getUsers )

router.get("/", home)

router.get("/login/google", login)

router.get("/logout/google", logout)

export default router
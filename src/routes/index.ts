import {Router} from 'express'
import * as usuarioController from '../controllers/usuarioController'
import * as etapa1Controller from '../controllers/etapa1Controller'
import * as etapa2Controller from '../controllers/etapa2Controller'
import * as etapa3Controller from '../controllers/etapa3Controller'
import * as etapa4Controller from '../controllers/etapa4Controller'
import * as etapa5Controller from '../controllers/etapa5Controller'
import * as etapa6Controller from '../controllers/etapa6Controller'
import * as etapa7Controller from '../controllers/etapa7Controller'






const router = Router()

router.get('/etapa1',etapa1Controller.etapa1)
router.post('/etapa1',etapa1Controller.etapa1Post)

router.get('/etapa2',etapa2Controller.etapa2)
router.post('/etapa2',etapa2Controller.etapa2Post)

//router.get('/etapa3',usuarioController.etapa3)

router.get('/etapa3',etapa3Controller.etapa3)
router.post('/etapa3',etapa3Controller.etapa3Post)

router.get('/etapa4',etapa4Controller.etapa4)
router.post('/etapa4',etapa4Controller.etapa4Post)

router.get('/etapa5',etapa5Controller.etapa5)
router.post('/etapa5',etapa5Controller.etapa5Post)

router.get('/etapa6',etapa6Controller.etapa6)
router.post('/etapa6',etapa6Controller.etapa6Post)

router.get('/etapa7',etapa7Controller.etapa7)

router.post('/submit',usuarioController.submit)


export default router
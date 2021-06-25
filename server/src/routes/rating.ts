import express from 'express'
import { RatingController } from '@/controllers'


const router = express.Router({ mergeParams: true })

router.get('/', RatingController.list)

export default router


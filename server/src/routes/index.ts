import express from 'express'
import ratingRoutes from './rating'

const initPrivateRoutes = () => {
  const router = express.Router({ mergeParams: true })
  router.use('/ratings', ratingRoutes)
  return router
}

export default {
  initPrivateRoutes
}
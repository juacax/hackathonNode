import express from 'express'
import entryController from '../controllers/entry/index.controller.js'
import { authUser, canEdit, canVote } from '../middlewares/security/index.middleware.js'
import { userExists } from '../middlewares/user/index.middleware.js'
import { entryExists } from '../middlewares/entry/index.middleware.js'

const router = express.Router()
router.post('/entries', authUser, userExists, entryController.insert)
router.post(
  '/entries/:entryId/photos',
  authUser,
  userExists,
  entryExists,
  canEdit,
  entryController.addPhoto
)
router.delete(
  '/entries/:entryId/photos/:photoId',
  authUser,
  userExists,
  entryExists,
  canEdit,
  entryController.deletePhoto
)
router.post(
  '/entries/:entryId/votes',
  authUser,
  userExists,
  entryExists,
  canVote,
  entryController.vote
)

export default router

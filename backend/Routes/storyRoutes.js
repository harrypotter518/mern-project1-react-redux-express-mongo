import express from 'express'
const router = express.Router()
import protect from '../Middlewares/authMiddleware.js'
import { 
    writeStory,
    getStories,
    deleteStories,
    getStoryById,
    deleteStory,
    addReview,
    reportStory,
    getTopStories,
    getLatestStories,
    getMyStories,


} from '../Controllers/storyControllers.js'
// import { reportStory } from '../../../MyAuthor/backend/controllers/storyController.js'

router.route('/')
    .get(getStories)
    .delete(deleteStories)

router.route('/top').get(getTopStories)
router.route('/latest').get(getLatestStories)
router.route('/my-stories').get(protect , getMyStories)


router.route('/write-story')
    .post(protect , writeStory)


router.route('/:id')
    .get(getStoryById)
    .delete(protect , deleteStory)

    

router.route('/:id/add-review').post(protect , addReview)
router.route('/report/:id').post(protect , reportStory)



module.exports = router
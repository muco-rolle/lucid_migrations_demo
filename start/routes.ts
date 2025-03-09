/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const SignupController = () => import('#controllers/auth/signup_controller')
import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home')

router.post('/signup', [SignupController, 'store']).as('signup.store')

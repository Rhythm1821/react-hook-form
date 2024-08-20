import './App.css'
import { useForm } from 'react-hook-form'

function App() {

  const { register, handleSubmit, watch, setError, formState: { errors, isSubmitting } } = useForm()
  const delay = (d) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res()
      }, d * 1000)
    })
  }
  const onSubmit = async (data) => {
    await delay(4)
    console.log(data);
    if (data.username !== "rohit") {
      setError("autherror", { message: "username is not rohit" })
    }
  }

  return (
    <>
      <div className="md:flex">
        <div className='sm:hidden md:block content container bg-indigo-600 w-full'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi similique quam hic modi cumque non vitae tenetur autem. Omnis maxime ipsa error nesciunt, at nostrum corrupti! Praesentium illo animi soluta cumque beatae voluptas. Doloribus dolore fugiat repudiandae quia est necessitatibus perspiciatis, hic vel, dolor tempora laboriosam. Placeat iusto laudantium praesentium, itaque repudiandae accusantium dolores repellat dolor ipsum consectetur tenetur rem tempora ut animi velit ex nesciunt voluptate adipisci. Libero totam exercitationem veniam officia provident nam at repudiandae labore veritatis eligendi similique, sequi laboriosam voluptates harum perferendis mollitia quibusdam fuga aliquam! Vitae laboriosam maiores culpa officia laudantium facilis temporibus cupiditate iure eum. Esse corrupti reprehenderit necessitatibus quod illum praesentium. Vero sapiente dignissimos quasi ullam eius ipsa aliquid corrupti deleniti fugiat, iste architecto? Nihil, est amet. Animi adipisci atque unde assumenda impedit! Quam quasi reiciendis aut, sequi hic at vel sapiente dicta earum! Deserunt, perspiciatis. At unde recusandae iure voluptate veritatis sunt repellendus modi quaerat fuga! Eligendi, nemo accusantium minima consequatur nesciunt assumenda exercitationem quia cupiditate expedita! Sapiente voluptatem neque ea beatae atque in ratione aliquid quasi quibusdam. Accusantium a necessitatibus ullam ipsam praesentium expedita sed laudantium, quaerat odit architecto nihil quis temporibus consequuntur odio nisi! Animi in perferendis soluta? Molestiae illo provident veritatis! Minus possimus eveniet eius optio, voluptas maxime accusantium. Modi provident veniam consequatur facilis neque totam odit ipsa. Consequuntur neque animi fugit enim officia molestiae saepe velit nemo ad omnis eligendi labore, dolorum soluta, quis architecto quo deleniti ipsam quaerat perspiciatis fugiat? Quaerat vitae ad magnam reprehenderit libero enim sint sunt quis quod sit quasi maiores consequatur ratione nemo molestias, perferendis laboriosam iusto deserunt dolores iste. Ratione qui soluta facilis explicabo sunt odit consequatur quos praesentium debitis iure minus laborum quas, doloribus recusandae voluptatum porro ipsam. Saepe eius dolor rerum error voluptate unde non recusandae quos, magni quam odio.
        </div>
        <div className='form w-full'>
          <form className='flex flex-col gap-2 items-center justify-center min-h-screen'>
            <h1 className='text-3xl text-gray-400'>Authentication</h1>
            <input
              className='border border-gray-400 rounded-md w-1/2 p-3 my-2'
              type="text" placeholder="Username"
              {...register("username",
                {
                  required: { value: true, message: "username is required" },
                  minLength: { value: 3, message: "min length is 3" },
                  maxLength: { value: 10, message: "max length is 10" }
                })} />
            {errors.username && <div className='red'>{errors.username.message}</div>}

            <input
              className='border border-gray-400 rounded-md w-1/2 p-3 my-2'
              type="text" placeholder="Password"
              {...register("password",
                {
                  required: { value: true, message: "password is required" },
                  minLength: { value: 3, message: "min length is 6" }
                })} />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`border border-gray-400 bg-blue-800 rounded-md w-1/2 py-3 mt-2 text-white ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
              Login
            </button>
            {errors.autherror && <div className='text-red-500 mt-2'>{errors.autherror.message}</div>}

          </form>
        </div>
      </div>
    </>
  )
}

export default App

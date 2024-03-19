
function Signin() {
  return (
    <div className='flex flex-col  w-full items-center justify-center h-screen'> 
    <div className='flex flex-col border-2 border-red-700 p-10 rounded-lg  justify-center items-center'>
    <h1 className=' text-5xl font-semibold text-red-600'>Login</h1>
    <p className="mt-3">Enter your details below</p>
    <input className='border-2 border-grey-800 text-3xl p-2' type='email' placeholder="Email"/>    
    <input className="border-2 border-grey-800 text-3xl p-2" type='password' placeholder = "Password"/>
    <button className='bg-red-600 w-full mt-4 text-white rounded-lg py-3'>Login</button>
   </div>
 </div>
  )
}

export default Signin



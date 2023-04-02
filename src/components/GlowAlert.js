

const GlowAlert = () => {
    return (
        <>
        <div class="flex items-center bg-black justify-center h-screen px-8 py-16">
  <div class="relative group">
    <div class="animate-tilt transition group-hover:duration-200 duration-500 group-hover:opacity-100 opacity-75 absolute rounded-lg -inset-0.5 bg-gradient-to-r from-green-300 via-indigo-700 to-pink-500 filter blur"></div>
    <button class="relative flex items-center py-4 leading-none bg-black divide-x divide-gray-600 rounded-lg px-7">
      <span class="pr-6 text-gray-100">Get Started</span>
      <span class="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-100"> Read the docs &rarr; </span>
    </button>
  </div>
</div>

        </>
    )
}

export default GlowAlert
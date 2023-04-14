

const GlowAlert = (props) => {
    return (
        <>
        <a href="#" class="shadow-lg shadow-blue-500/50 inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
            <span class="shadow-md shadow-purple-500/20 bg-gradient-to-r from-purple-600 to-blue-500 text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3 font-bold">{props.alert}</span> <span class="text-sm font-medium">{props.text}<b>{props.bold}</b></span> 
            <svg aria-hidden="true" class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        </>
    )
}

export default GlowAlert
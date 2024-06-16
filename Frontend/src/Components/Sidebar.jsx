import { useState } from "react"
export const Sidebar = () => {
  const [show, setShow] = useState(true);
  return (
    <>
    {
      show && (
        <div id="drawer-navigation" className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-navigation-label">
    <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
    <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setShow(false)} >
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Close menu</span>
    </button>
  <div className="py-4 overflow-y-auto">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolores neque recusandae quibusdam facere, at consequatur excepturi, iste eligendi similique nostrum tempore. Natus quos corrupti eaque magnam sapiente ut dolorum officia commodi, pariatur praesentium corporis eum. Quidem at veniam sit illum quia magni totam aliquam voluptas quam a vel dicta impedit architecto nam, eius accusantium aliquid hic eligendi aspernatur beatae. Aspernatur cumque facere rerum nostrum aliquid, eum earum autem maiores sapiente. Natus, quos cumque consequuntur vel consectetur aspernatur sed odio numquam voluptas atque. Quo impedit dolores debitis, pariatur incidunt facere aliquid. Culpa quasi rerum voluptas dolores voluptatum cupiditate esse officia cum eum nam assumenda commodi voluptates repellendus corporis ea reprehenderit earum fugit modi, ipsa asperiores? Distinctio hic unde error officia quis laudantium quo ea sequi ipsum id assumenda sunt dolore ducimus magnam, nisi porro nam cumque exercitationem debitis quas ad nesciunt ex voluptas. Iste repellat ea excepturi, et ullam, itaque rerum dolorem quasi tempora maiores optio id corporis adipisci praesentium illo ratione error assumenda voluptatem delectus reiciendis quam voluptatum. Adipisci molestiae similique cumque rerum beatae, non inventore reprehenderit neque recusandae voluptas. Molestiae corrupti quam, eveniet reprehenderit dicta adipisci alias deleniti, repellendus, unde repellat provident magnam esse. Rerum, aperiam? Reprehenderit, atque?</p>
   </div>
</div>
      )
    }
    </>
  )
}

export default Sidebar
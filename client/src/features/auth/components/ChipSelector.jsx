export default function ChipSelector({

  items,

  selected,

  setSelected,

}) {

  function toggle(item){

    if(selected.includes(item)){

      setSelected(

        selected.filter(i=>i!==item)

      );

    }

    else{

      setSelected([

        ...selected,

        item

      ]);

    }

  }

  return(

    <div className="flex flex-wrap gap-4">

      {items.map(item=>(

        <button

          key={item}

          onClick={()=>toggle(item)}

          className={`px-5 py-3 rounded-full transition

          ${selected.includes(item)

          ? "bg-indigo-700 text-white"

          : "bg-gray-100 hover:bg-gray-200"

          }`}

        >

          {item}

        </button>

      ))}

    </div>

  );

}
import React from "react";

const About= () => {
  return (
    <div className=" w-full md:h-screen p-2 flex items-center py-16 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase  lg:text-4xl md:text-3xl text-2xl tracking-widest text-[#9126b8] font-mono  ">About</p>
          <h2 className="py-4  lg:text-4xl md:text-3xl text-2xl">Who I Am</h2>
          <p className=" py-3 text-gray-600  text-xl">// Im not your normal developer</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quisquam vero quam sunt laudantium facere. Commodi consequuntur nulla modi cumque vitae nobis, nam mollitia tempora molestiae. Deleniti voluptatem odit distinctio optio ab laudantium maiores fugiat error eligendi molestiae labore quis sunt soluta deserunt porro !</p>
          <p className="py-3 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus soluta harum unde. Incidunt eos, aliquid quas vero eum culpa, dolorem nobis animi odio alias dolores vel molestiae ipsam. Earum omnis laboriosam perferendis iusto alias consequatur harum laudantium quidem. Magni impedit molestiae maiores eligendi aliquid cumque recusandae architecto similique vel laborum commodi non, omnis culpa nemo quia .</p>
          <p className="py-3 text-gray-600 underline cursor-pointer text-xl">Check out some of my projects.</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-600 rounded-xl items-center justify-between p-4 hover:scale-105 ease-in duration-300"> 
          <img src="https://images.unsplash.com/photo-1547731030-cd126f44e9c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="/" />
        </div>
      </div>
    </div>
  );
}

export default About;

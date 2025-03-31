import Image from "./Image";
import {Link} from "react-router-dom"
const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="735"/>
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, cum quasi.</Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Writtem by</span>
          <Link className="text-blue-800">John doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laboriosam reprehenderit atque vitae, porro totam, excepturi voluptas culpa quos, accusantium expedita repudiandae?</p>
        <Link to="/test" className="underline text-blue-800 text-sm">Read more</Link>
      </div>
    </div>
  )
}

export default PostListItem
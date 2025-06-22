import { blogs } from "@/contents/blogs";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const BlogsPage = () => {
    return (
        <div className="container max-w-7xl mx-auto py-10">
            <h1 className="text-4xl font-bold mb-4 text-center">My Blog Posts</h1>
            <p className="text-lg text-secondary mb-24 text-center">
                Here are some of my recent blogs. Click on the links to read more.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {
            blogs.map((blog) =>(
                <article key={blog.slug} className='bg-white dark:bg-dark/50 reounded-lg shadow-md p-6'>
                    <Link href={`/blogs/${blog.slug}`}>
                    <h3 className='text-xl font-semibold mb-2 hover:text-primary'>{blog.title}</h3>
                    </Link>
                    <p className='text-gray-600 dark:text-gray-300 mb-4'>{blog.excerpt}</p>

                    <div className='flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4'>
                        <span className='flex items-center'>
                            <FaCalendarAlt className='mr-2 pb-1'/>
                            {new Date(blog.date).toLocaleDateString()}
                        </span>
                        <span className='flex items-center '>
                            <FaClock className='mr-2 pb-1' />
                            {blog.readTime}
                        </span>
                    </div>
                </article>
            ))
        }
      </div>
        </div>
    );
}
export default BlogsPage;
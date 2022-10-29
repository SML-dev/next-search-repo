import Image from 'next/image'
import Link from 'next/link'
import { ResultRes } from '../../types/results'

interface Props {
  results: ResultRes[]
}

const UsersView = ({ results }: Props) => {
  return (
    <ul className="flex  flex-col  h-max  ">
      {results.map((result) => (
        <li key={result.id} className=" flex-row h-max   justify-center ">
          <div className=" mt-16 bg-gray-500 rounded-xl shadow-xl ">
            <div className="rounded-t-lg h-32 overflow-hidden"></div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-2  rounded-full overflow-hidden">
              {result.owner.avatar_url && (
                <Image
                  className="mx-auto object-cover rounded-full h-20 w-20"
                  width="150px"
                  height="150px"
                  src={result.owner.avatar_url}
                  alt="avatar"
                />
              )}
            </div>
            <div className="text-center mt-2 mb-4 mx-3 ">
              <h2 className="font-semibold text-xl">{result.owner.login} </h2>
              <p className=" text-lg mt-3 text-gray-200">
                {result.description}
              </p>
            </div>
            <div className="flex justify-center ">
              <svg
                className="w-4 fill-current text-blue-900 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span>{result.stargazers_count}</span>
            </div>

            <div className="p-4 border-t mx-8 mt-2">
              <Link href={result.owner.html_url}>
                <button
                  type="button"
                  className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
                >
                  GitHub
                </button>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default UsersView

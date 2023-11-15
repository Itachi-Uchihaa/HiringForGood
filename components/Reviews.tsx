import Image from "next/image";

type ReviewsProps = {
  icon: string | any;
  description: string;
  ratings?: number;
  profile: string | any;
  author: string;
  area: string;
}

const Reviews = ({icon, description, ratings = 5, author, area, profile} : ReviewsProps) => {
    const stars = Array.from({ length: ratings }, (_, index) => (
        <li key={index}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-yellow-500">
                <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                />
            </svg>
        </li>
    ));

    return(
      <div className="text-center mb-40">
          <div className="mb-12">
              <div className="mb-6 flex justify-center">
                  <Image
                      src={icon}
                      alt={""}
                      width={60}
                      height={60}
                  />
              </div>
              <p className="mb-12 text-2xl font-semibold">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2"
                      viewBox="0 0 24 24">
                      <path
                          d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  {description}
              </p>
              <Image
                  src={profile}
                  alt={""}
                  width={10}
                  height={10}
                  className="w-14 h-14 rounded-full mx-auto mb-2"
              />
              <ul className="mb-2 flex items-center justify-center">
                  {stars}
              </ul>
              <h5 className="mb-4 text-xl font-semibold">{author}</h5>
              <h6 className="mb-4 font-medium text-primary">
                  {area}
              </h6>
          </div>
      </div>
  )
}

export default Reviews
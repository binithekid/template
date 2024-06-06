import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }: any) => {
  const { title, slug, excerpt, coverImage, date, readTime } = post.fields;

  function formatDate(inputDate: any) {
    const date = new Date(inputDate);

    // Define custom month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Extract day, month, and year separately
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    // Add 'th' to day
    const formattedDay = `${day}${getDaySuffix(day)}`;

    // Get the month name from the custom list
    const monthName = monthNames[monthIndex];

    return `${formattedDay} ${monthName} ${year}`;
  }

  // Helper function to get day suffix (e.g., "th", "st", "nd", "rd")
  function getDaySuffix(day: any) {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  return (
    <Link href={`/blog/${slug}`} aria-label={title} className="block">
      <div className="flex transition-all hover:opacity-80 cursor-pointer flex-col gap-4 md:flex-row">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="London Retail Blog Post Cover Image"
          className="object-cover md:h-[20rem] w-full md:w-1/2 rounded"
          src={`https:${coverImage.fields.file.url}`}
        />
        <div className="w-full md:w-1/2 flex gap-1 flex-col md:py-6 px-2 md:px-6 sm:px-10 justify-center">
          <p className="text-[13px] text-gray-500 font-uncut">
            {formatDate(date)}
          </p>
          <h1 className="font-display text-[1.5rem] leading-tight text-gray-800 font-bold">
            {title}
          </h1>

          <p className="font-uncut text-[13px] line-clamp  sm:text-sm text-gray-700">
            {excerpt}
          </p>
          <p className="text-[13px] mt-1 text-gray-500 font-uncut">
            {readTime} min read
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;

type AnnouncementProps = {};

export default function Announcement({}: AnnouncementProps) {
  return (
    <div className="bg-primary px-4 z-50 py-3 fixed w-full top-0 left-0 h-12 flex items-center justify-center text-white">
      <p className="text-center text-sm font-medium">
        საბაზისო კურსი უკვე დაიწყო{" "}
        <a href="#" className="inline-block underline">
          ნახე!
        </a>
      </p>
    </div>
  );
}

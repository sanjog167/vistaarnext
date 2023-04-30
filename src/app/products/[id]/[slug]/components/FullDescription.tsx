export default function FullDescription(props: { content: string }) {
  return (
    <div className="ml-4 mt-12">
      <p className="w-max border-4 border-l-0 border-r-0 border-t-0 border-b-primary pb-2 font-bold uppercase text-primary">
        Description
      </p>
      <hr className="mb-4" />
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  );
}

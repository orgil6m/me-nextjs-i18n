"use client";
import MeInput from "@/components/common/input";

const DynamicIdPage = ({ params: { id } }) => {
  if (!id) return <></>;
  return (
    <main>
      <section className="py-4">
        Id :{id}
        <MeInput icon={<>hi</>} onChange={(val) => console.log(val)} />
      </section>
    </main>
  );
};

export default DynamicIdPage;

import RecordList from "@/components/Records/RecordsList";

const records = () => {
    return (
        <div className="relative h-full w-full bg-gradient-to-l from-slate-200 to-slate-500 flex flex-col justify-center items-center">
            <RecordList />
        </div>
    );
};

export default records;

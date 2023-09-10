import Grid from "@/components/layout/Grid";

export default function PaginaLayout() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-[90%] lg:w-4/5 gap-2">
                <Grid cols={1} lg={8} md={4} sm={2}>
                    <div className="w-full bg-red-600 h-36"></div>
                    <div className="w-full bg-yellow-600 h-36"></div>
                    <div className="w-full bg-white h-36"></div>
                    <div className="w-full bg-purple-600 h-36"></div>
                    <div className="w-full bg-cyan-600 h-36"></div>
                    <div className="w-full bg-rose-600 h-36"></div>
                    <div className="w-full bg-green-600 h-36"></div>
                    <div className="w-full bg-zinc-600 h-36"></div>
                </Grid>
            </div>
        </div>
    );
}
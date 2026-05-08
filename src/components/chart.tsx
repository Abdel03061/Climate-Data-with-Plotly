type ChartProps = {
    path: string;
    title: string;
};

const Chart = ({path, title}: ChartProps) => {
    return (
        <iframe src={path} title={title} width="600" height="400"/>
    );
};
export default Chart;

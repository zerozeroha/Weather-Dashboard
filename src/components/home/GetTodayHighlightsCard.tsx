import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    GetSunriseAndSunset,
    GetWavesWidget,
} from "@/components";
import { ForecastTideDay, Weather } from "../types";
import { Currency } from "lucide-react";

interface Props {
    currentData: Weather;
    tideData: ForecastTideDay;
}

function GetTodayHighlightsWidget({ currentData, tideData }: Props) {
    if (!currentData || !tideData) {
        return <div>데이터를 불러오는 중입니다</div>;
    }

    // const tidetimeWithUnit = tideData.day.tides[0].tide.map((item: Tide) => {
    //     const [_, hourString] = item.tide_time.split("");
    //     const [hour] = hourString.split(":").map(Number);
    //     const formattedUnit = hour < 12 ? "am" : "pm";

    //     return {
    //         displayTime: item.tie_time.split("")[1],
    //         unit: formattedUnit,
    //         type: item.tide_type,
    //     };
    // });
    return (
        <Card className="flex-1">
            <CardHeader>
                <CardTitle className="text-xl">Today's Highlights</CardTitle>
                <CardDescription>
                    오늘 날씨 중 주의깊게 살펴보아야 할 이벤트를 조회하고
                    있습니다.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
                <div className="flex items-center gap-5">
                    <Card className=" w-full bg-neutral-100">
                        <CardHeader>
                            <CardDescription className="font-semibold text-neutral-700">
                                해양 및 조수 데이터
                                <span className="text-neutral-400 font-normal ml-1">
                                    Marine and Sailing
                                </span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="w-full flex items-center justify-between">
                            <img
                                src="src/assets/icons/Waves.png"
                                alt=""
                                className="h-14"
                            />
                            <div className="w-fit grid grid-cols-4 gap-3">
                                <div className="flex flex-col items-center">
                                    {/* 몇회 만조/간조 표시 영역 */}
                                    <p className="text-sm text-muted-foreground">
                                        1회 - 만조
                                    </p>
                                    {/* 시간 표시 영역 */}
                                    <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">
                                        05:48
                                        <span className="ml-[1px]">am</span>
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    {/* 몇회 만조/간조 표시 영역 */}
                                    <p className="text-sm text-muted-foreground">
                                        1회 - 만조
                                    </p>
                                    {/* 시간 표시 영역 */}
                                    <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">
                                        05:48
                                        <span className="ml-[1px]">am</span>
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    {/* 몇회 만조/간조 표시 영역 */}
                                    <p className="text-sm text-muted-foreground">
                                        1회 - 만조
                                    </p>
                                    {/* 시간 표시 영역 */}
                                    <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">
                                        05:48
                                        <span className="ml-[1px]">am</span>
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    {/* 몇회 만조/간조 표시 영역 */}
                                    <p className="text-sm text-muted-foreground">
                                        1회 - 만조
                                    </p>
                                    {/* 시간 표시 영역 */}
                                    <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">
                                        05:48
                                        <span className="ml-[1px]">am</span>
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className=" w-full bg-neutral-100">
                        <CardHeader>
                            <CardDescription className="font-semibold text-neutral-700">
                                일출/일몰
                                <span className="text-neutral-400 font-normal ml-1">
                                    Sunrise and Sunset
                                </span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2">
                            <GetSunriseAndSunset
                                imgUrl={"src/assets/icons/1000d.svg"}
                                label={"Sunrise"}
                                time={tideData.astro.sunrise}
                            />
                            <GetSunriseAndSunset
                                imgUrl={"src/assets/icons/1000n.svg"}
                                label={"Sunset"}
                                time={tideData.astro.sunset}
                            />
                        </CardContent>
                    </Card>
                </div>
                <div className="w-full grid grid-cols-4 gap-5">
                    <GetWavesWidget
                        labelKo={"습도"}
                        labelEn={"Humidity"}
                        imgUrl={"src/assets/icons/Humidity.svg"}
                        value={currentData.current.humidity}
                        unit={"%"}
                    />
                    <GetWavesWidget
                        labelKo={"기압"}
                        labelEn={"Pressure"}
                        imgUrl={"src/assets/icons/Wind.svg"}
                        value={currentData.current.pressure_mb}
                        unit={"hPa"}
                    />
                    <GetWavesWidget
                        labelKo={"가시거리"}
                        labelEn={"Visibility"}
                        imgUrl={"src/assets/icons/Fog.svg"}
                        value={currentData.current.vis_km}
                        unit={"km"}
                    />
                    <GetWavesWidget
                        labelKo={"체감온도"}
                        labelEn={"Feels Like"}
                        imgUrl={"src/assets/icons/Hot.svg"}
                        value={currentData.current.feelslike_c}

                        // 문자열로 바로 넣었을 때는 HTML에서 변환되지 않아 기호로 표시되지 않을 수 있습니다. 이 경우, JSX에서 기호를 사용하려면 String.fromCharCode() 메서드를 사용해 표현하거나, 직접 **섭씨 기호 (℃)**를 기호로 입력
                    />
                </div>
            </CardContent>
        </Card>
    );
}

export { GetTodayHighlightsWidget };

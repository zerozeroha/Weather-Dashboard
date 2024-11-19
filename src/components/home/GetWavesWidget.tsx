import { Card, CardHeader, CardDescription, CardContent } from "@/components";

// 타입스크립트 인터페이스 : GetWavesWidget 컴포넌트에 전달되는 props의 타입을 정의
// -> 이렇게 타입을 지정하면 컴파일 단계에서 타입오류를 감지 가능.
interface Props {
    labelKo: string;
    labelEn: string;
    imgUrl: string;
    value: number;
    unit?: string;
}

// 함수형 컴포넌트 정의 Props 인터페이스를 통해 전달받은 props 구조 분해 할당 -> 사용
function GetWavesWidget({ labelKo, labelEn, imgUrl, value, unit }: Props) {
    return (
        <Card className="w-full h-fit bg-neutral-50">
            <CardHeader>
                <CardDescription className="font-semibold text-neutral-700">
                    {labelKo}
                    <span className="text-neutral-400 font-normal ml-1">
                        {labelEn}
                    </span>
                </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
                <img src={imgUrl} alt="" className="h-10 w-10" />
                <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">
                    {value}
                    {labelKo === "체감온도" ? (
                        <span className="text-lg ml-1">&#8451;</span>
                    ) : (
                        <span className="text-lg ml-1">{unit}</span>
                    )}
                    ;
                </p>
            </CardContent>
        </Card>
    );
}

export { GetWavesWidget };

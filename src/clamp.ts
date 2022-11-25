export default function clamp(lowerBound:number, upperNumber:number){
    return (numbers: number[]) => {
        return numbers.map(number => Math.max(Math.min(number, upperNumber), lowerBound))
    }
}
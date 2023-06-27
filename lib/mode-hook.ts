
type Mode = 
    "WELCOME" |
    "PRESENTING" |
    "VOTING" |
    "RESULTS" |
    "FEEDBACK";

export function useMode(): [Mode, string?] {
    return ["VOTING"];
}
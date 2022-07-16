export interface petition_info {
    id: number,
    name: string,
    color: string,
    icon: string,
    in_count: number,
};

export interface petitions_cat {
    id: number,
    name: string,
    petitions: petition_info[],
};
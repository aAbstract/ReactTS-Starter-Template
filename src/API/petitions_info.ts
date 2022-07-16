import { sleep } from "../Lib/async";

import { petitions_cat, petition_info } from "../Models/petitions_meta";

export async function get_fake_petitions_info(): Promise<petitions_cat[]> {
    const data = <petitions_cat[]>[
        {
            id: 1,
            name: 'Course Petitions',
            petitions: <petition_info[]>[
                {
                    id: 1,
                    name: 'Course Repeat',
                    color: '#18A0FB',
                    icon: 'fa-rotate-right',
                    in_count: 5,
                },
                {
                    id: 2,
                    name: 'Course Drop',
                    color: '#D8392B',
                    icon: 'fa-trash-can',
                    in_count: 2,
                },
                {
                    id: 3,
                    name: 'Change Grade Form',
                    color: '#18A0FB',
                    icon: 'fa-file-invoice',
                    in_count: 4,
                },
            ],
        },
        {
            id: 2,
            name: 'Declaration Petitions',
            petitions: <petition_info[]>[
                {
                    id: 4,
                    name: 'Choose Program',
                    color: '#689F38',
                    icon: 'fa-user-graduate',
                    in_count: 3,
                },
                {
                    id: 5,
                    name: 'Change Concetraion',
                    color: '#6D4C41',
                    icon: 'fa-repeat',
                    in_count: 2,
                },
            ],
        },
        {
            id: 3,
            name: 'Student Status Petitions',
            petitions: <petition_info[]>[
                {
                    id: 6,
                    name: 'Gap Form',
                    color: '#5E35B1',
                    icon: 'fa-file-invoice',
                    in_count: 6,
                },
                {
                    id: 7,
                    name: 'Readmission',
                    color: '#F57C00',
                    icon: 'fa-building-columns',
                    in_count: 4,
                },
            ],
        },
    ];

    await sleep(2000);

    return data;
};
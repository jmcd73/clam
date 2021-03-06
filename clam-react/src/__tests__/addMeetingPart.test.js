import mockStore from "../__mockStore/addMeetingMockStore";
import {
    formatAssignmentsForPostToCake,
    getActiveMeetingParts
} from "../Redux/actions/async/asyncActions";

describe("addMeetingParts", () => {
    it("will format the meeting parts for load to Cake correctly", () => {
        const { meetings, meetingPartsById } = mockStore;
        const meetingId = 279;

        expect(
            formatAssignmentsForPostToCake(
                getActiveMeetingParts(meetingId, meetings, meetingPartsById),
                meetingId
            )
        ).toEqual(expectedOutput);
    });
    it("configure newly inserted part", () => {
        const { partsObjectByIds, meetings } = mockStore;
        const localMeetingId = "5c1f4577-ac50-4fd6-a491-5f4dda200a82";
        const partId = 7;
        const meetingId = meetings[localMeetingId].meeting_id;
        const meetingPart = [partsObjectByIds[partId]];

        const formattedPart = formatAssignmentsForPostToCake(
            meetingPart,
            meetingId
        );

        //console.log(meetingPart);
        //wconsole.log(formattedPart);

        ["part_id", "start_time", "minutes", "part_title", "meeting_id"].map(
            field => {
                expect(formattedPart[0]).toHaveProperty(field);
            }
        );

        const expectedFormattedPart = [
            {
                chairman_part: false,
                co_visit: false,
                no_assign: false,
                assistant: false,
                partname: "Digging for Spiritual Gems",
                replace_token: "",
                minutes: 8,
                start_time: "7:48 PM",
                min_suffix: "min.",
                section_id: 1,
                sort_order: 40,
                counsel_mins: 0,
                link_to: null,
                has_auxiliary: false,
                assistant_prefix: null,
                school_part: null,
                not_co_visit: null,
                meeting_id: 281,
                part_id: 7,
                part_title: "Digging for Spiritual Gems"
            }
        ][0];

        expect(formattedPart[0]).toEqual(expectedFormattedPart);
    });
});

const expectedOutput = [
    {
        assistant: true,
        assistant_id: null,
        assistant_prefix: "Prayer:",
        aux_assistant_id: null,
        aux_person_id: null,
        chairman_part: false,
        co_visit: false,
        counsel_mins: 0,
        has_auxiliary: false,
        id: 2678,
        link_to: null,
        meeting_id: 279,
        min_suffix: "min.",
        minutes: 5,
        no_assign: true,
        not_co_visit: null,
        part_id: 4,
        part_title: "Song {no} and Prayer",
        partname: "Song {no} and Prayer",
        person_id: null,
        replace_token: "{no}",
        school_part: null,
        section_id: 4,
        songNumber: null,
        sort_order: 10,
        start_time: "7:30 PM"
    },
    {
        assistant: false,
        assistant_id: null,
        assistant_prefix: null,
        aux_assistant_id: null,
        aux_person_id: null,
        chairman_part: true,
        co_visit: false,
        counsel_mins: 0,
        has_auxiliary: false,
        id: 2679,
        link_to: null,
        meeting_id: 279,
        min_suffix: "min. or less",
        minutes: 3,
        no_assign: false,
        not_co_visit: null,
        part_id: 5,
        part_title: "Opening Comments — Chairman",
        partname: "Opening Comments — Chairman",
        person_id: null,
        replace_token: "",
        school_part: null,
        section_id: 4,
        songNumber: null,
        sort_order: 20,
        start_time: "7:35 PM"
    },
    {
        assistant: false,
        assistant_id: null,
        assistant_prefix: null,
        aux_assistant_id: null,
        aux_person_id: null,
        chairman_part: false,
        co_visit: false,
        counsel_mins: 0,
        has_auxiliary: false,
        id: 2680,
        link_to: null,
        meeting_id: 279,
        min_suffix: "min.",
        minutes: 10,
        no_assign: false,
        not_co_visit: null,
        part_id: 6,
        part_title: "Treasures from God's Word",
        partname: "Treasures from God's Word",
        person_id: null,
        replace_token: "",
        school_part: null,
        section_id: 1,
        songNumber: null,
        sort_order: 30,
        start_time: "7:38 PM"
    },
    {
        assistant: false,
        assistant_id: null,
        assistant_prefix: null,
        aux_assistant_id: null,
        aux_person_id: null,
        chairman_part: false,
        co_visit: false,
        counsel_mins: 0,
        has_auxiliary: false,
        id: 2681,
        link_to: null,
        meeting_id: 279,
        min_suffix: "min.",
        minutes: 8,
        no_assign: false,
        not_co_visit: null,
        part_id: 7,
        part_title: "Digging for Spiritual Gems",
        partname: "Digging for Spiritual Gems",
        person_id: null,
        replace_token: "",
        school_part: null,
        section_id: 1,
        songNumber: null,
        sort_order: 40,
        start_time: "7:48 PM"
    },
    {
        assistant: false,
        assistant_id: null,
        assistant_prefix: null,
        aux_assistant_id: null,
        aux_person_id: null,
        chairman_part: false,
        co_visit: false,
        counsel_mins: 0,
        has_auxiliary: false,
        id: 2682,
        link_to: null,
        meeting_id: 279,
        min_suffix: "min. or less",
        minutes: 5,
        no_assign: true,
        not_co_visit: null,
        part_id: 12,
        part_title: "Song {no}",
        partname: "Song {no}",
        person_id: null,
        replace_token: "{no}",
        school_part: null,
        section_id: 3,
        songNumber: null,
        sort_order: 130,
        start_time: "7:56 PM"
    },
    {
        assistant: false,
        assistant_id: null,
        assistant_prefix: null,
        aux_assistant_id: null,
        aux_person_id: null,
        chairman_part: false,
        co_visit: false,
        counsel_mins: 0,
        has_auxiliary: false,
        id: 2683,
        link_to: null,
        meeting_id: 279,
        min_suffix: "min.",
        minutes: 15,
        no_assign: false,
        not_co_visit: null,
        part_id: 13,
        part_title: "Living as Christians Part 1",
        partname: "Living as Christians Part 1",
        person_id: null,
        replace_token: "",
        school_part: null,
        section_id: 3,
        songNumber: "1",
        sort_order: 140,
        start_time: "8:01 PM"
    },
    {
        assistant: false,
        assistant_id: null,
        assistant_prefix: null,
        aux_assistant_id: null,
        aux_person_id: null,
        chairman_part: false,
        co_visit: false,
        counsel_mins: 0,
        has_auxiliary: false,
        id: 2684,
        link_to: null,
        meeting_id: 279,
        min_suffix: "min. ",
        minutes: 8,
        no_assign: false,
        not_co_visit: null,
        part_id: 14,
        part_title: "Living as Christians Part 2",
        partname: "Living as Christians Part 2",
        person_id: null,
        replace_token: "",
        school_part: null,
        section_id: 3,
        songNumber: "2",
        sort_order: 150,
        start_time: "8:16 PM"
    },
    {
        assistant: true,
        assistant_id: null,
        assistant_prefix: "Reader:",
        aux_assistant_id: null,
        aux_person_id: null,
        chairman_part: false,
        co_visit: false,
        counsel_mins: 0,
        has_auxiliary: false,
        id: 2685,
        link_to: null,
        meeting_id: 279,
        min_suffix: "min.",
        minutes: 30,
        no_assign: false,
        not_co_visit: true,
        part_id: 15,
        part_title: "Congregation Bible Study",
        partname: "Congregation Bible Study",
        person_id: null,
        replace_token: "",
        school_part: false,
        section_id: 3,
        songNumber: null,
        sort_order: 160,
        start_time: "8:24 PM"
    },
    {
        assistant: false,
        assistant_id: null,
        assistant_prefix: null,
        aux_assistant_id: null,
        aux_person_id: null,
        chairman_part: true,
        co_visit: false,
        counsel_mins: 0,
        has_auxiliary: false,
        id: 2686,
        link_to: 5,
        meeting_id: 279,
        min_suffix: "min. or less",
        minutes: 3,
        no_assign: false,
        not_co_visit: null,
        part_id: 16,
        part_title: "Review Followed by Preview of Next Week",
        partname: "Review Followed by Preview of Next Week",
        person_id: null,
        replace_token: "",
        school_part: null,
        section_id: 5,
        songNumber: null,
        sort_order: 170,
        start_time: "8:54 PM"
    },
    {
        assistant: true,
        assistant_id: null,
        assistant_prefix: "Prayer:",
        aux_assistant_id: null,
        aux_person_id: null,
        chairman_part: false,
        co_visit: false,
        counsel_mins: 0,
        has_auxiliary: false,
        id: 2687,
        link_to: null,
        meeting_id: 279,
        min_suffix: "min.",
        minutes: 5,
        no_assign: true,
        not_co_visit: null,
        part_id: 17,
        part_title: "Song {no} and Prayer",
        partname: "Song {no} and Prayer",
        person_id: null,
        replace_token: "{no}",
        school_part: null,
        section_id: 5,
        songNumber: null,
        sort_order: 200,
        start_time: "8:57 PM"
    }
];

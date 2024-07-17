import "./contact.scss";
import { motion } from "framer-motion";

const Contact = () => {
    const variants = {
        initial: {
            y: 500,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    }

    return (
        <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>N'hésitez pas à me contacter !</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail <img src="/email.png" alt="Email" /></h2>
                    <span><a href="mailto:clara.stihidej@gmail.com">clara.stihidej@gmail.com</a></span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Profil LinkedIn <img src="/linkedin.png" alt="LinkedIn" /></h2>
                    <span><a href="https://www.linkedin.com/in/clara-sithidej/">SITHIDEJ Clara</a></span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Profil GitHub <img src="/github.png" alt="GitHub" /></h2>
                    <span><a href="https://github.com/Coaraa">Coaraa</a></span>
                </motion.div>
            </motion.div>
            <div className="svgContainer">
                <motion.div className="phoneSvg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
                    <svg fill="#D1CAA1" width="400px" height="400px" viewBox="-6.4 -6.4 76.80 76.80" transform="matrix(-1, 0, 0, 1, 0, 0)">

                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                        <g id="SVGRepo_iconCarrier">
                            <g id="_x32_5_attachment" />
                            <g id="_x32_4_office" />
                            <g id="_x32_3_pin" />
                            <g id="_x32_2_business_card" />
                            <g id="_x32_1_form" />
                            <g id="_x32_0_headset" />
                            <g id="_x31_9_video_call" />
                            <g id="_x31_8_letter_box" />
                            <g id="_x31_7_papperplane" />
                            <g id="_x31_6_laptop" />
                            <g id="_x31_5_connection" />
                            <g id="_x31_4_phonebook" />
                            <g id="_x31_3_classic_telephone" />
                            <g id="_x31_2_sending_mail" />
                            <g id="_x31_1_man_talking" />
                            <g id="_x31_0_date" />
                            <g id="_x30_9_review" />
                            <g id="_x30_8_email" />
                            <g id="_x30_7_information" />
                            <g id="_x30_6_phone_talking" />
                            <g id="_x30_5_women_talking">
                                <g>
                                    <g>
                                        <path d="M24.8975,30.165c0.0488,0,0.0986-0.001,0.1484-0.0034c0.8809-0.0366,1.6865-0.3921,2.21-0.9751 c0.3691-0.4111,0.335-1.0435-0.0762-1.4121c-0.4111-0.3677-1.043-0.335-1.4121,0.0762c-0.1611,0.1792-0.4697,0.2988-0.8057,0.313 c-0.3975,0.02-0.7861-0.1191-1.0566-0.3726c-0.4004-0.3784-1.0342-0.3599-1.4131,0.0415 c-0.3789,0.4019-0.3604,1.0347,0.042,1.4136C23.1582,29.8345,24.0117,30.165,24.8975,30.165z" />
                                        <path d="M29.0557,22.8726c0.2705-0.2539,0.6621-0.3901,1.0576-0.3726c0.3359,0.0142,0.6436,0.1338,0.8047,0.3125 c0.1973,0.2202,0.4707,0.3325,0.7441,0.3325c0.2383,0,0.4766-0.0845,0.668-0.2554c0.4111-0.3691,0.4453-1.001,0.0762-1.4121 c-0.5225-0.5835-1.3281-0.939-2.21-0.9761c-0.9277-0.0288-1.8525,0.2949-2.5117,0.916c-0.4023,0.3789-0.4209,1.0117-0.042,1.4136 C28.0205,23.2329,28.6553,23.251,29.0557,22.8726z" />
                                        <path d="M20.1855,22.813c0.1973,0.2202,0.4707,0.332,0.7441,0.332c0.2383,0,0.4775-0.0845,0.668-0.2559 c0.4111-0.3691,0.4453-1.0015,0.0762-1.4121c-0.5244-0.584-1.332-0.9395-2.2158-0.9756 c-0.9473-0.0342-1.8516,0.2964-2.5078,0.9175c-0.4014,0.3794-0.418,1.0122-0.0391,1.4136 c0.3818,0.4019,1.0146,0.418,1.4141,0.0386c0.2666-0.2524,0.6309-0.3916,1.0518-0.3711 C19.7148,22.5137,20.0244,22.6338,20.1855,22.813z" />
                                        <path d="M45.2793,26.5942h-0.0381c-0.5527,0-0.9805,0.4478-0.9805,1s0.4658,1,1.0186,1s1-0.4478,1-1 S45.832,26.5942,45.2793,26.5942z" />
                                        <path d="M50.5283,26.5942h-0.0391c-0.5527,0-0.9805,0.4478-0.9805,1s0.4668,1,1.0195,1s1-0.4478,1-1 S51.0811,26.5942,50.5283,26.5942z" />
                                        <path d="M55.7803,26.5942h-0.0381c-0.5527,0-0.9814,0.4478-0.9814,1s0.4668,1,1.0195,1s1-0.4478,1-1 S56.333,26.5942,55.7803,26.5942z" />
                                        <path d="M59.28,20.01c-4.1-4.82-11.36-5.4-16.1801-1.3c-0.05,0.04-0.1,0.08-0.14,0.13c-1.15-4.68-3.1-9.47-6.39-12.92 C33.46,2.65,29.51,1,24.84,1C17.37,1,11.67,5.34,8.38,13.56c-3.49,8.7-3.41,20.04-1.87,21.51 c0.9384,0.8489,2.5365,1.6553,4.1448,2.2953c-8.6735,3.9588-8.6773,11.0029-8.6773,15.932V62c0,0.5522,0.4473,1,1,1H24.784 c0.001,0,0.0021,0.0005,0.0031,0.0005S46.6846,63,46.6846,63c0.5527,0,1-0.4478,1-1v-8.7026 c0-4.8027-0.0054-11.6125-8.0305-15.6208c1.2346-0.5417,2.4157-1.1508,3.2759-1.6266c1.85,1.65,4.18,2.64,6.7,2.85 c0.31,0.02,0.62,0.03,0.93,0.03c2.72,0,5.33-0.95,7.43-2.74c2.33-1.98,3.75-4.76,4-7.82C62.23,25.31,61.27,22.35,59.28,20.01z M10.6592,61v-4.8848c0-0.5522-0.4473-1-1-1s-1,0.4478-1,1V61H3.9775v-7.7026c0-5.4964,0.0034-12.2559,10.8652-15.3299 l-2.8193,5.1043c-0.2168,0.3916-0.1465,0.8799,0.1719,1.1943l3.1855,3.1494l-2.2578,5.7671 c-0.1611,0.4126-0.0322,0.8818,0.3184,1.1538L22.0166,61H10.6592z M15.2578,53.2158l2.2256-5.6846 c0.1455-0.3716,0.0557-0.7944-0.2285-1.0752l-3.1152-3.0801l2.4288-4.3976l6.3467,20.1876L15.2578,53.2158z M18.7599,34.2893 c1.8194,1.3416,3.8754,2.1711,6.0057,2.1711c1.9218,0,3.9115-0.8772,5.7386-2.2679l1.252,2.3571l-1.5366,4.8776H19.435 l-1.5521-4.937L18.7599,34.2893z M13.9375,21.4214v-3.8916c2.918-0.7085,3.6611-1.6431,4.8291-3.3809 c0.2959-0.4419,0.6221-0.9268,1.0488-1.4824c5.7842,3.3081,10.1367,4.6816,15.9268,5.0151v3.7607 c0,5.0225-5.9932,13.0181-10.9766,13.0181c-2.0349,0-4.023-0.9845-5.7318-2.5032c-0.0017-0.0017-0.0038-0.0029-0.0055-0.0046 C16.0564,29.3085,13.9375,25.0353,13.9375,21.4214z M20.0638,43.4272h9.5258l-4.7678,15.1341L20.0638,43.4272z M33.0797,39.0062 l2.4017,4.4459l-3.1201,3.084c-0.2842,0.2813-0.374,0.7041-0.2275,1.0762l2.2275,5.6846l-7.6577,5.9484L33.0797,39.0062z M45.6846,53.2974V61h-5.1035v-4.8848c0-0.5522-0.4473-1-1-1s-1,0.4478-1,1V61H27.7043l8.4744-6.5825 c0.3506-0.272,0.4795-0.7417,0.3174-1.1543l-2.2607-5.7676l3.1855-3.1479c0.3154-0.3125,0.3877-0.7959,0.1768-1.1865 l-2.8101-5.2013c0.6685,0.1884,1.2931,0.3917,1.8821,0.6069c0.0052,0.0018,0.0101,0.0038,0.0154,0.0054 C45.678,41.864,45.6846,48.1368,45.6846,53.2974z M36.9973,36.5634c-1.0552-0.3694-2.2184-0.6985-3.4925-0.9843l-1.4546-2.7385 c3.2595-3.1593,5.692-7.7846,5.692-11.3983v-4.7148c0-0.5376-0.4258-0.9795-0.9629-0.9995 c-6.1631-0.2295-10.5332-1.5957-16.6992-5.2202c-0.4209-0.2476-0.9609-0.1548-1.2734,0.2207 c-0.7725,0.9224-1.2871,1.689-1.7012,2.3052c-1.0615,1.5806-1.4189,2.1133-4.3672,2.7139 c-0.4658,0.0952-0.8008,0.5049-0.8008,0.98v4.6938c0,3.9083,2.1079,8.4235,5.2225,11.4815l-1.0725,2.6915 c-0.8946,0.2024-1.7331,0.4266-2.5178,0.6714C11.192,35.5442,8.8646,34.4692,7.93,33.66c-0.78-1.58-1.12-14,3.93-22.72 C14.91,5.67,19.28,3,24.84,3c4.1,0,7.56,1.44,10.28,4.29c3.3,3.46,5.15,8.53,6.18,13.36c-1.7,2.29-2.48,5.14-2.17,8.03 l-2.59,3.51c-0.23,0.3-0.2599,0.7-0.1,1.03c0.16,0.34,0.5,0.55,0.87,0.56l3.72,0.1c0.15,0.23,0.3199,0.45,0.49,0.66 C40.2336,35.2254,38.497,36.0573,36.9973,36.5634z M59.99,28.21c-0.1,1.27-0.44,2.47-1,3.56c-0.56,1.1-1.33,2.08-2.3,2.9 c-1.93,1.64-4.37,2.44-6.9,2.23c-1.97-0.16-3.79-0.9-5.27-2.13c-0.8106-0.6598-1.56-1.4893-2.08-2.4 c-0.18-0.29-0.49-0.46-0.83-0.47l-2.32-0.07l1.68-2.28c0.16-0.21,0.23-0.48,0.19-0.74c-0.2599-1.78-0.0099-3.55,0.69-5.14 c0.39-0.91,0.94-1.76,1.62-2.52c0.28-0.32,0.6-0.63,0.9301-0.91c3.98-3.39,9.97-2.91,13.36,1.07 C59.4,23.24,60.19,25.69,59.99,28.21z" />
                                    </g>
                                </g>
                            </g>
                            <g id="_x30_4_calling" />
                            <g id="_x30_3_women" />
                            <g id="_x30_2_writing" />
                            <g id="_x30_1_chatting" />
                        </g>

                    </svg>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Contact

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        height: 80,
        backgroundColor: '#3B3A38',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderTopWidth: 0
    },
    tab_icon: {
        height: 20,
        width: 20,
        resizeMode: 'center'
    },
    background: {
        backgroundColor: 'black',
        flex: 1,
    },
    fit: {
        width: '100%',
        height: '100%'
    },
    white_text: {
        color: 'white'
    },

    logo: {
        width: '70%',
        resizeMode: 'center'
    },
    flex_row: {
        flexDirection: "row",
        alignItems: 'center',
    },
    margins: {
        marginVertical: 8,
        marginHorizontal: 16
    },
    boldtext: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15
    },

    // Header.tsx
    header: {
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    header_amount: {
        border: 30,
        padding: 5,
        backgroundColor: '#3B3A38',
        borderRadius: 50,
    },
    header_logo: {
        height: 30,
        width: 30,
        resizeMode: 'center',
    },
    header_logo_circle: {
        height: 40,
        width: 40,
        borderRadius: 25,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header_amount_text: {
        paddingHorizontal: 8,
        color: 'white'
    },
    header_profile: {
        height: 45,
        width: 45,
        borderRadius: 25,
        resizeMode: 'cover',
    },

    // Search.tsx
    searchbar: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    searchinput: {
        color: 'black',
        flex: 1
    },
    searchicon: {
        width: 30,
        height: 30,
    },

    // Artwork.tsx
    dropdown: {
        marginLeft: 5,
        backgroundColor: '#6E5DE7',
        padding: 10,
        width: 80,
        height: 45,
        borderRadius: 10,
    },
    dropdown_focus: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    dropdown_selected: {
        color: 'white',
        fontSize: 16
    },
    dropdown_container: {
        backgroundColor: '#6E5DE7',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 0
    },
    dropdown_list: {
        padding: 10,
        color: 'white',
        fontSize: 15,
        textAlignVertical: 'center'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'white',
    },
    iconStyle: {
        width: 20,
        height: 20,
        tintColor: 'white'
    },

    // Showcase.tsx
    showcase_card: {
        backgroundColor: 'white',
        overflow: 'hidden',
        height: 352,
        width: 240,
        marginRight: 15,
        borderRadius: 15,
    },
    card_time: {
        backgroundColor: 'white',
        color: 'black',
        top: 10,
        left: 10,
        padding: 10,
        alignSelf: 'flex-start',
        borderRadius: 8,
        opacity: 0.9
    },
    card_details: {
        height: 78,
        marginHorizontal: 8,
        marginBottom: 15,
        backgroundColor: '#FFFFFF33',
        borderRadius: 8,
        borderStyle: 'solid',
        borderColor: '#FFFFFFCC',
        borderWidth: 1,
        padding: 8
    },
    card_text: {
        fontSize: 13,
        marginLeft: 5
    },
    card_logo_circle: {
        height: 25,
        width: 25,
        borderRadius: 25,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card_logo: {
        height: 15,
        width: 15,
        resizeMode: 'center',
    },
    card_margin: {
        marginBottom: 5
    },
    card_photo: {
        height: 30,
        width: 30,
        borderRadius: 25,
        resizeMode: 'cover',
    },

    // TopCreator.tsx
    creator_box: {
        backgroundColor: '#3B3A38',
        borderRadius: 8,
        borderColor: '#FFFFFF73',
        borderWidth: 1,
        padding: 10
    },
    creator_margin: {
        marginHorizontal: 10
    },
    creator_profile: {
        height: 45,
        width: 45,
        borderRadius: 25,
        resizeMode: 'cover',
    },
    creator_logo: {
        height: 18,
        width: 18,
        resizeMode: 'center',
        margin: 2,
        marginLeft: 0
    },

    // DiscoveryTab.tsx
    shorts_header: {
        position: 'absolute',
        top: 45,
        left: 32,
        right: 32,
        justifyContent: 'space-between',
    },
    shorts_close_button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFFFFF33',
        padding: 10
    },
    shorts_search_button: {
        width: 40,
        height: 40,
        padding: 10,
    },
    shorts_icons_view: {
        position: 'absolute',
        right: 30,
        top: 132,
        alignItems: 'center'
    },
    shorts_icons_text: {
        color: 'white',
        marginBottom: 40,
        fontWeight: 'bold',
        fontSize: 13
    },
    shorts_icon: {
        width: 24,
        height: 24
    },
    shorts_description: {
        position: 'absolute',
        bottom: 28,
        left: 20,
        right: 20
    },
    shorts_profile: {
        height: 48,
        width: 48,
        borderRadius: 20,
        marginRight: 10
    },
    verified_icon: {
        height: 15,
        width: 15,
        marginLeft: 5
    },
    following_text: {
        color: '#1E90FF'
    },
    shorts_plus_icon: {
        width: 60,
        height: 60,
        borderRadius: 24,
        backgroundColor: 'white',
        padding: 18
    },

    // Comments.tsx
    comments_container: {
        position: 'absolute',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: 'white',
        width: '100%',
        bottom: 0,
        padding: 12,
        height: '70%'
    },
    comments_header: {
        height: 52,
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        padding: 5
    },
    comments_close_icon: {
        width: 16,
        height: 16,
        tintColor: 'black'
    },
    comments_profile: {
        width: 28,
        height: 28,
        borderRadius: 14,
        marginRight: 12
    },
    comment: {
        flexDirection: 'row',
        marginTop: 16
    },
    comment_name: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
    },
    comment_content: {
        color: '#6B6B6B',
        fontSize: 13,
        marginVertical: 5,
    },
    comment_extras: {
        color: '#A2A2A2',
        fontSize: 13,
        marginLeft: 5,
        marginRight: 15
    },
    comment_icon: {
        width: 16,
        height: 16,
    },
    comment_icon_color: {
        tintColor: '#A2A2A2',
    },
    comment_input_profile: {
        width: 40,
        height: 40,
        borderRadius: 16
    },
    comment_input: {
        flex: 1,
        paddingHorizontal: 14,
        paddingVertical: 10,
        color: 'black'
    },
    emoji_icon: {
        width: 25,
        height: 25
    }
})

export default styles
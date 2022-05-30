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
})

export default styles
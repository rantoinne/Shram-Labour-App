import { StyleSheet } from 'react-native';
import {SECONDARY_COLOR, APP_BACKGROUND, APP_WHITE, LIGHT_GRAY, MEDIUM_GRAY} from '../styles/colors';
import {Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const parent = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: SECONDARY_COLOR
    },
    container_row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: SECONDARY_COLOR
    },
    progress: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#00000066',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export const curveButton = StyleSheet.create({
    touchOpacity: {
        height: 40,
        marginTop: 40,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    imageBackground: {
        resizeMode: "cover",
        justifyContent: "center",
        overflow: "hidden"
    },
    text: {
        height: 40,
        color: 'black',
        textAlignVertical: 'center',
        alignSelf: 'center'
    }
})

export const margin = StyleSheet.create({
    margin_40: {
        margin: 40
    },
    margin_20: {
        margin: 20
    },
    marginTop_10: {
        marginTop: 10
    },
    marginTop_20: {
        marginTop: 20
    },
    marginTop_5: {
        marginTop: 5
    }
})

export const fontSize = StyleSheet.create({
    font_28: {
        fontSize: 28
    },
    font_20: {
        fontSize: 20
    },
    font_18: {
        fontSize: 18
    },
    font_16: {
        fontSize: 16
    },
    font_14: {
        fontSize: 14
    },
    font_12: {
        fontSize: 12
    }
})

export const border = StyleSheet.create({
    curve: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: SECONDARY_COLOR,
        marginTop: 10
    },
    video: {
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 10,
        overflow: "hidden"
    },
    coloredCurve: {
        height: 60,
        borderColor: '#41e3f7',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: SECONDARY_COLOR,
        marginTop: 10
    },
}
)

export const header = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        width: 20,
        height: 20,
        marginRight: 5,
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 4,
    },
    profile: {
        width: 30,
        height: 30,
        marginRight: 10,
    }
}
)

export const bottomTab = StyleSheet.create({
    tabImage: {
        width: 25,
        height: 25,
        borderRadius: 40 / 2,
    }
}

)

export const camera = StyleSheet.create({

    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow:"hidden",
    },
    capture: {
        flex: 0,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    backgroundVideo: {
        height: '100%',
        // width:'100%',
        // position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow:"hidden"
    }
});

export const profileImage = StyleSheet.create({
    profileImgContainer: {
        marginLeft: 8,
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    img: {
        height: 100,
        width: 100,
        overflow: "hidden"
    },
});

export const cardContainer = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: SECONDARY_COLOR,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    cardContent: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});


export const buttonContainer = StyleSheet.create({
    button: {
        borderRadius: 4,
        overflow: "hidden"
    },
    text: {
        height: 40,
        textAlignVertical: 'center',
        alignSelf: 'center',
        fontSize: 20
    }
});

export const signUpScreensBg = StyleSheet.create({
    container: {
       flex:1,
       backgroundColor: APP_BACKGROUND
    }
});

export const youRAShramikStyles = StyleSheet.create({
    chooseCategoryBox: {
        height: Height > 360 ? 185 : 160,
        margin: 20,
        width: '100%',
        borderRadius: 8,
        justifyContent:'center', 
        alignItems: 'center', 
        backgroundColor:APP_WHITE
    },
    image: {
        resizeMode:'contain', 
    },
    textInsideBox: {
        fontWeight: 'bold',
        fontSize: Height > 360 ? 16 : 14,
        marginTop: 16,
        textAlign: 'center'
    }
});

export const industryStyles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    chooseCategoryBox: {
        height: 150,
        flex: 1,
        margin: 4,
        padding: 2,
        borderRadius: 8,
        justifyContent:'center', 
        alignItems: 'center', 
        backgroundColor:APP_WHITE
    },
    image: {
        height: 80,
        resizeMode: 'contain',
    },
    textInsideBox: {
        fontWeight:'bold', 
        fontSize:Width > 360 ? 12 : 10, 
        marginTop:15,
        textAlign:'center',
        color: LIGHT_GRAY
    }
});


export const jobsInProfileViewStyle = StyleSheet.create({
    jobCardContainer: {
        width: Width / 2,
        height: Height / 8,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 4,
        marginHorizontal: 8,
        marginVertical: 20,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 10 },
        // shadowOpacity: 1,
        // shadowRadius: 10,
        elevation: 6,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
});

export const JobsStyles = StyleSheet.create({
    tabs: {
        height:60,
        flex:1,
        margin:6,
        padding:2,
        borderRadius: 5,
        justifyContent:'center', 
        alignItems: 'center', 
        backgroundColor:APP_BACKGROUND,
        flexDirection:'row',
        borderWidth:2,
        borderColor: APP_BACKGROUND 
    },
    bodyContainer :{ 
        flex:1, 
        width:'95%', 
        alignSelf:'center', 
    },
    dropDownContainer:{
        height:40,
        margin:5,
        marginLeft:0,
        padding:2,
        borderRadius: 5,
        justifyContent:'center', 
        alignItems: 'center', 
        backgroundColor:APP_WHITE,
        flexDirection:'row',
        borderWidth:2,
        borderColor: APP_WHITE
    },
    chooseLocation: {
        height:Height>360 ? 120 : 100,
        flex:1,
        margin:4,
        padding:2,
        borderRadius: 8,
        justifyContent:'center', 
        alignItems: 'center', 
        backgroundColor:APP_WHITE
    },
    image: {
        height:50,
        resizeMode:'contain', 
    },
    textInsideBox: {
        fontWeight:'bold', 
        fontSize:Width > 360 ? 14 : 10, 
        marginTop:15,
        textAlign:'center',
        color: LIGHT_GRAY
    },
    jobDetailPerksBox: {
        height: 150,
        flex: 1,
        margin: 2,
        alignItems: 'center', 
        backgroundColor:APP_WHITE
    },
    jobDetailPerksImage:{
        height: 70,
        resizeMode: 'contain',
    },
    textInsidePerksTabs:{
        marginTop:2,
        fontSize: 12,
        textAlign: 'center'
    }
});

export const jobsDetailStyles = StyleSheet.create({
    textTitle: {
        fontWeight:'bold', 
        fontSize:15, 
        color: MEDIUM_GRAY,
        width:80,
        lineHeight:28
    },
    textInfo: {
        fontWeight:'bold', 
        fontSize:15, 
        textAlign:'center',
        color: 'black',
        lineHeight:28
    },
    buttonText:{
        fontSize:15, 
        textAlign:'center',
        color: APP_WHITE  
    }

});

export const createPost = StyleSheet.create({
    bottomTab: {
        paddingTop: 4,
        paddingBottom: 4,
        paddingEnd: 8,
        paddingStart: 8,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 12,
        margin: 4,
        fontSize: 14,
        textAlign: 'center'
    }

})

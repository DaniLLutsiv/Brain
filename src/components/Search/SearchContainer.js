import React from 'react';
import { connect } from 'react-redux';
import { follow, SetUsers, SetTotalCount, SetActivePageNumberAC, IsLoading, FollowedDeleteThunkCreator,SetUsersThunkCreator, FollowedPostThunkCreator } from '../../redux/SearchReducer';
import Search from './Search/Search';
import PreLoader from '../PreLoader/PreLoader';


class SearchApi extends React.Component {

    componentDidMount(){
        this.props.SetUsersThunkCreator(this.props.activePage, this.props.pageElement);
        /*this.props.IsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageElement}`,{
             withCredentials: true
        })
            .then(response => {
                this.props.IsLoading(false)
                this.props.SetTotalCount(response.data.totalCount)
                this.props.SetUsers(response.data.items) // k props пишем this!!! 
            })*/

    }
    clickNumberPage = (activePageNumber) => {
        this.props.SetUsersThunkCreator(activePageNumber, this.props.pageElement)
        // this.props.IsLoading(true)
        // this.props.SetActivePageNumber(activePageNumber) ;
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${activePageNumber}&count=${this.props.pageElement}`,{
        //      withCredentials: true
        // })
        //     .then(response => {
        //         this.props.IsLoading(false)
        //         this.props.SetTotalCount(response.data.totalCount)
        //         this.props.SetUsers(response.data.items) // k props пишем this!!! 
        //     })
    }   

    render(){ // JSX

        return <> 
        { this.props.isLoading ? <PreLoader/> : 
            <Search activePage={this.props.activePage} 
            SearchData={this.props.SearchData} 
            pageCount={this.props.pageCount} 
            clickNumberPage={this.clickNumberPage} 
            follow={this.props.follow}
            FollowedPostThunkCreator={this.props.FollowedPostThunkCreator}
            FollowedDeleteThunkCreator={this.props.FollowedDeleteThunkCreator}/> 
        }
        </>
    }
} 


const mapStateToProps = (state) => {
    return{
       SearchData: state.SearchData.users,
       pageCount: Math.ceil(state.SearchData.totalCount/state.SearchData.pageElement),
       activePage: state.SearchData.activePageNumber,
       pageElement: state.SearchData.pageElement,
       isLoading: state.SearchData.loading
    }    
}


/*const mapDispatchToProps = (dispatch) => {
    return{
        follow: (id) => {
            dispatch(followAC(id))
        },
        SetUsers: (users) => {
            dispatch(SetUsersAC(users))
        },
        SetTotalCount: (total) => {
            dispatch(SetTotalCountAC(total))
        },
        SetActivePageNumber: (activePage) => {
            dispatch(SetActivePageNumberAC(activePage))
        },
        IsLoading: (loading) => {
            dispatch(IsLoadingAC(loading))
        }
    }    
}*/



const SearchContainer = connect(mapStateToProps, {
        follow,
        SetUsers,
        SetTotalCount,
        SetActivePageNumber: SetActivePageNumberAC,
        IsLoading,
        SetUsersThunkCreator,
        FollowedPostThunkCreator,
        FollowedDeleteThunkCreator
        })(SearchApi);



export default SearchContainer;

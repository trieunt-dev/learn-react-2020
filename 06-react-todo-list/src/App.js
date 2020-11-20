import React, { useState, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import Controls from './components/Controls';
import Header from './components/Header';
import ListTasks from './components/ListTasks';
import initialListTasks from './mocks/state';

const App = () => {
    const [listTasks, setListTasks] = useState(initialListTasks);
    const [orderBy, setOrderBy] = useState('name');
    const [orderDir, setOrderDir] = useState('asc');
    const [searchText, setSearchText] = useState('');

    let handleDeleteTask = (taskDelete, callback) => {
        let newListTask = listTasks.filter((task) => task.id !== taskDelete.id);
        setListTasks(newListTask);
        callback();
    };

    let onSelectSort = (orderBy, orderDir) => {
        setOrderBy(orderBy);
        setOrderDir(orderDir);
    };

    let onChangeSearchText = (text) => {
        setSearchText(text);
    };

    let handleAddNewTask = (task) => {
        listTasks.push(task);
        setListTasks([...listTasks]);
    };

    let injectedPropsControls = {
        onSelectSort,
        onChangeSearchText,
        orderBy,
        orderDir,
        searchText,
        handleAddNewTask,
    };

    let listTasksSearch = useMemo(() => {
        return listTasks.filter((task) => {
            let nameLower = task.name.toLowerCase(),
                searchTextLower = searchText.toLowerCase();

            return nameLower.indexOf(searchTextLower) !== -1;
        });
    }, [searchText, listTasks]);

    let listTaskSearchAndSort = useMemo(() => {
        let returnIndex = 1; // defaul asc
        if (orderDir === 'asc') returnIndex = -1;

        listTasksSearch.sort((a, b) => {
            if (a[orderBy] < b[orderBy]) {
                return returnIndex;
            }
            if (a[orderBy] > b[orderBy]) {
                return -1 * returnIndex;
            }
            return 0;
        });

        return [...listTasksSearch];
    }, [listTasksSearch, orderBy, orderDir]);

    return (
        <Container>
            <Header />
            <Controls {...injectedPropsControls} />
            <ListTasks
                listTasks={listTaskSearchAndSort}
                handleDeleteTask={handleDeleteTask}
            />
        </Container>
    );
};

export default App;

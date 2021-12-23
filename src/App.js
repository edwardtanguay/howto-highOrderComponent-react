import './App.scss';
import { SummaryList} from './components/SummaryList';
import { FullInfoList } from './components/FullInfoList';
import { withUsers } from './components/withUsers';

const SummaryListWithUsers = withUsers(SummaryList);
const FullInfoListWithUsers = withUsers(FullInfoList);

function App() {
	return (
		<div className="App">
			<h1>User Info</h1>
			<SummaryListWithUsers title="Summary List" />
			<FullInfoListWithUsers title="Full Info List" />
		</div>
	);
}

export default App;
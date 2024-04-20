import Container from '../components/utils/Container';
import SectionQuestion from '../components/home/SectionQuestion';
import SectionMap from '../components/home/SectionMap';

export default function Question() {
    return (
        <div className="my-8 md:my-10">
            <Container>
                <div className="space-y-8 md:space-y-10">
                    <SectionQuestion />
                    <SectionMap />
                </div>
            </Container>
        </div>
    );
}

import React from 'react';
import { connect } from 'react-redux';
import { someaction } from '../../actions/Module/someaction'
import Theme from '../Theme';


let PostitExersise = React.createClass({
    

    getInitialState: function() {
        var items = this.props.exercise.configuration.split(';');
        return {
            items:  items,
            resultItems: this.mapItems(items),
            instrunctionContent: this.props.exercise.instrunctionContent,
            phase: 0,
            isLoading: false,
            dialogOpen: false,
        };
    },

    componentWillReceiveProps: function(nextProps) {
        var items = nextProps.exercise.configuration.split(';')
        this.setState({
            items: items,
            resultItems: this.mapItems(items),
            instrunctionContent: nextProps.exercise.instrunctionContent
        })
    },
    componentDidMount: function() {
        //Update from server
        if (this.props.liveExercise && this.props.scoreCard === undefined) {
            var that = this;
            this.setState({ isLoading: true });
            this.props.dispatch(getExerciseResult(this.props.exerciseId))
                .then(
                    json => {
                        this.setScoreCard(json.result);

                        that.props.exercisesStatusChanged(json.result.isCompleted, that.props.exercise);
                    }
                );
        } else if (this.props.scoreCard !== undefined)
            this.setScoreCard(this.props.scoreCard);
    },

    setScoreCard: function(scoreCard) {
            this.setState({
                    isLoading: false,
                    phase: scoreCard.isCompleted ? 2 : this.state.phase
                },
                function() {
                    this.renderPdf();
                });
        },

        componentWillUnmount: function() {

            // This method is called immediately before the component is removed
            // from the page and destroyed. We can clear the interval here:

            clearInterval(this.timer);
        },

        onStart: function(event) {
            this.setState({
                phase: 1,
                questionIndex: 0,
                elapsed: 0,
                start: new Date()
            });

            this.timer = setInterval(this.tick, 1000);
        },

        tick: function() {
            this.setState({ elapsed: new Date() - this.state.start });
        },

        mapItems: function(items) {
            return items.map(function(i) {
                return {
                    question: i,
                    score: -1,
                };
            })
        },

        onScoreChanged: function(event) {
            this.state.resultItems[this.state.questionIndex].score = parseInt(event.target.value);
            this.setState({ resultItems: this.state.resultItems });
        },

        onContinue: function() {
            if (this.state.questionIndex === 3 && sessionStorage.sessionUserRoles.split(",").indexOf("Demo") >= 0) {
                this.setState({ dialogOpen: true });
            }

            if (this.state.questionIndex < this.state.resultItems.length - 1) {
                if (this.state.resultItems[this.state.questionIndex].score !== -1)
                    this.setState({ questionIndex: this.state.questionIndex + 1 });
            } else
                this.onFinished();
        },

        onFinished: function() {
            this.setState({
                    phase: 2
                },
                function() {
                    this.renderPdf();
                });

            if (this.props.onFinished !== undefined)
                this.props.onFinished(items);

            //Update server
            if (this.props.liveExercise) {
                var elapsed = Math.floor(this.state.elapsed / 1000);
                this.props.dispatch(putKpExplorerResultById(this.props.exerciseId,
                {
                    responses: this.state.resultItems,
                    exerciseId: this.props.exerciseId,
                    isCompleted: true,
                    elapsedTimeSeconds: elapsed
                }));

                //Signal that exercise has ended
                this.props.exercisesStatusChanged(true, this.props.exercise, this.props.exercise);
            }

        },

        getHtmlText: function(textIndex) {
            var text = this.state.instrunctionContent.length > textIndex
                ? this.state.instrunctionContent[textIndex]
                : "";

            return { __html: text };
        },

        handleDemoDialogClose: function() {
            this.setState({
                dialogOpen: false
            });
        },

        handleGoToLastQuestion: function() {
            this.setState({
                questionIndex: 85,
                dialogOpen: false
            });
        },

        render: function() {
            return (
            <div><h1>Hej henrik</h1></div>
        )}
    });

    PostitExersise = connect()(PostitExersise);

export default PostitExersise;
    
import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core";

import styled from "styled-components";

import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";

import GridContainer from "../GridContainer";
import GridItem from "../GridItem";
import TemplateContainer from "../TemplateContainer";
import ResumeBlock from "./Block";
import ListPaper from "./ListPaper";
import SkillIcon from "./SkillIcon";

// import SvgReactLogo from "./SvgReactLogo";
// import SvgBootstrapLogo from "./SvgBootstrapLogo";
// import SvgHtmlLogo from "./SvgHtmlLogo";
import { ReactComponent as SvgReactLogo } from "./react-logo.svg";
import { ReactComponent as SvgBootstrapLogo } from "./bootstrap-logo.svg";
import { ReactComponent as SvgHtmlLogo } from "./html-logo.svg";
import { ReactComponent as SvgCssLogo } from "./css-logo.svg";
import { ReactComponent as SvgJavascriptLogo } from "./javascript-logo.svg";
import { ReactComponent as SvgDockerLogo } from "./docker-logo.svg";
import { ReactComponent as SvgJqueryLogo } from "./jquery-logo.svg";

const styles = theme => ({
	heading: {
		fontWeight: "700"
	},
	italicFontStyle: {
		fontStyle: "italic"
	},
	subheading: {
		fontWeight: "700",
		position: "relative",
		"&:after": {
			content: '""',
			position: "absolute",
			width: "70px",
			height: "3px",
			backgroundColor: "#000",
			left: "0",
			right: "0",
			bottom: "-4px"
		}
	},
	paragraph: {
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.9em"
		},
		[theme.breakpoints.up("sm")]: {
			fontSize: "1em"
		}
	},
	fullWidth: {
		width: "100%"
	},
	paper: {
		width: "100%",
		padding: "10px 20px",
		boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.4)"
	},
	chip: {
		width: "130px",
		fontWeight: "700",
		height: "40px",
		"& > span": {
			paddingLeft: "0"
		}
	},
	skillLogo: {
		width: "64px",
		height: "64px",
		margin: 0
	}
});

const EducationPanel = props => {
	const { classes } = props;

	return (
		<Fragment>
			<Typography className={classes.heading}>
				Bachelor's Degree (Very good Grade)
			</Typography>
			<Typography className={classes.italicFontStyle}>
				Hanoi University of Science and Technology (9/2013 - 9/2017)
			</Typography>
			<Typography className={classes.paragraph}>
				My major was electronics and telecommunications engineering but
				i found myself actually love working in software field.
			</Typography>
		</Fragment>
	);
};

const ExperiencePanel = props => {
	const { classes } = props;

	return (
		<Fragment>
			<Typography className={classes.heading}>
				Software Developer
			</Typography>
			<Typography className={classes.italicFontStyle}>
				VNPT Technology (10/2017 - 3/2019)
			</Typography>
			<Typography className={classes.paragraph}>
				I have experiences working with CI/CD tools such as Jenkins,
				Docker, Kubernetes, also i'm familiar with Linux system and
				command line. Most of the time working in VNPT Technology, my
				role is software developer, i worked in team to make management
				web with Javascript, JQuery, AngularJS and Bootstrap.
			</Typography>
		</Fragment>
	);
};

const Resume = props => {
	const { classes } = props;

	const educationArray = [<EducationPanel {...props} />];
	const experienceArray = [<ExperiencePanel {...props} />];

	return (
		<TemplateContainer>
			<GridContainer
				rows="auto 1fr"
				areas={["title", "content"]}
				rowGap="30px"
			>
				<GridItem area="title">
					<Typography component="h1" className={classes.heading}>
						Resume
					</Typography>
				</GridItem>
				<GridItem area="content">
					{/* Education */}
					<ResumeBlock title="Education">
						<ListPaper listItems={educationArray} />
					</ResumeBlock>

					{/* Experience */}
					<ResumeBlock title="Experience">
						<ListPaper listItems={experienceArray} />
					</ResumeBlock>

					{/* Skills */}
					<ResumeBlock title="Skills">
						<Paper className={classes.paper}>
							<GridContainer rowGap="8px">
								<SkillIcon
									label="React/Redux"
									icon={
										<SvgReactLogo
											className={classes.skillLogo}
										/>
									}
								/>
								<SkillIcon
									label="Bootstrap"
									icon={
										<SvgBootstrapLogo
											className={classes.skillLogo}
										/>
									}
								/>
								<SkillIcon
									label="HTML"
									icon={
										<SvgHtmlLogo
											className={classes.skillLogo}
										/>
									}
								/>
								<SkillIcon
									label="CSS"
									icon={
										<SvgCssLogo
											className={classes.skillLogo}
										/>
									}
								/>
								<SkillIcon
									label="Javascript"
									icon={
										<SvgJavascriptLogo
											className={classes.skillLogo}
										/>
									}
								/>
								<SkillIcon
									label="JQuery"
									icon={
										<SvgJqueryLogo
											className={classes.skillLogo}
										/>
									}
								/>
								<SkillIcon
									label="Docker"
									icon={
										<SvgDockerLogo
											className={classes.skillLogo}
										/>
									}
								/>
							</GridContainer>
						</Paper>
					</ResumeBlock>
				</GridItem>
			</GridContainer>
		</TemplateContainer>
	);
};

export default withStyles(styles)(Resume);

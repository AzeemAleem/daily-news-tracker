import React, { useEffect } from "react";
import { Typography, Flex, Row, Col, Breadcrumb, Image, Tag } from "antd";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";


const { Title, Paragraph } = Typography;


export default function ArticlesDetails() {
    const navigate = useNavigate(); // Hook to programmatically navigate
    const { articleId } = useParams("articleId");

    const { articles } = useSelector((state) => state.article);

    // Find the specific article based on articleId
    const article = articles.find(
        (article) => article.id === parseInt(articleId)
    );

    useEffect(() => {
        if (!article) {
            navigate("/");
        }
    }, [article, navigate]);

    return (
        <Row justify={"center"}>
            <Col md={20}>
                <Title>NY Times Most Popular Articles</Title>
                <Breadcrumb
                    style={{ marginBlock: 30 }}
                    items={[
                        {
                            title: <Link to={"/"}>Articles</Link>,
                        },
                        {
                            title: article?.title,
                        },
                    ]}
                />
                <Row>
                    <Col lg={10} style={{ marginBottom: 10 }}>
                        <Image
                            height={400}
                            src={article?.media?.[0]?.["media-metadata"][2].url}
                            style={{ objectFit: "cover" }}
                        />
                    </Col>
                    <Col lg={14} style={{ paddingLeft: 15 }}>
                        <Title style={{ marginTop: 0 }}>{article?.title}</Title>
                        <Paragraph>
                            {article?.abstract}
                            <ul style={{ marginBlock: 15 }}>
                                {article?.des_facet?.map((facet, id) => (
                                    <li key={id}>{facet}</li>
                                ))}
                            </ul>
                        </Paragraph>
                        <Typography>
                            <CalendarOutlined />{" "}
                            {new Date(article?.published_date).toDateString()}
                        </Typography>
                        <Typography style={{ marginTop: 5 }}>
                            <UserOutlined /> {article?.byline}
                        </Typography>
                        <Flex gap={4} wrap style={{ marginTop: 20 }}>
                            {article?.adx_keywords?.split(";")?.map((keyword, id) => (
                                <Tag color="default" key={id}>
                                    {keyword}
                                </Tag>
                            ))}
                        </Flex>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

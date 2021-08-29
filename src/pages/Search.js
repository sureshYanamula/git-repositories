import React, { useEffect, useState } from 'react';
import RepoCard from '../components/RepoCard';
import Grid from '@material-ui/core/Grid';
import { getRepositories } from '../functions/repos';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

const Search = (props) => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  // Load repositories by default on page load
  useEffect(() => {
    setLoading(true);
    getRepositories(props.location.search.split('=')[1])
      .then((res) => {
        if (res.status === 200) {
          setRepositories(res.data.items);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(true);
      });
  }, [props.location.search]);

  // Load repositories dynamically on user search input
  // Deebounce effect to improve the performance of the application
  useEffect(() => {
    const delayed = setTimeout(() => {
      fetchRepositories(text);
    }, 300);
    return () => clearTimeout(delayed);
  }, [text]);

  const fetchRepositories = (text) => {
    getRepositories(text)
      .then((res) => {
        if (res.status === 200) {
          setRepositories(res.data.items);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <Grid container direction='column' alignItems='center'>
      <Grid container direction='row' item sm={11}>
        <Grid>
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            <h3>
              Most Popular{' '}
              <span style={{ color: 'red' }}>
                {text || props.location.search.split('=')[1]}
              </span>{' '}
              Libraries
            </h3>
          )}
        </Grid>
      </Grid>
      <Grid container direction='row' item sm={11}>
        {loading ? (
          <CircularProgress disableShrink />
        ) : (
          <Grid container spacing={1}>
            {repositories.map((product, index) => (
              <Grid
                item
                sm={4}
                md={3}
                xs={6}
                key={index}
                styles={{ marginTop: '1rem' }}
              >
                <RepoCard product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Search;
